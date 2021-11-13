import axios from "axios";
import jsSHA from "jssha";
export default function getAPI(notes='ScenicSpot',city = '', className){
    return new Promise((resolve, reject) => {
        let url=`https://ptx.transportdata.tw/MOTC/v2/Tourism/${notes}/${city}?$top=8&$format=JSON`

        if(className){
            url+=`&filter=contains(Class1,'${className}') or contains(Class2,'${className}') or contains(Class3,'${className}')`
        }

        axios.get(
            url,
            {
                headers: getAuthorizationHeader()
            }
            )
        .then(function (response) {
            resolve(response.data) 
        })
        .catch(function (error) {
            reject(error)
        }); 
    });
}
function getAuthorizationHeader() {
 //  填入自己 ID、KEY 開始
        let AppID = process.env.VUE_APP_ID;
        let AppKey = process.env.VUE_APP_KEY;
    //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

// ?$filter=contains(Class1%2C'')%20or%20contains(Class2%2C'')
import axios from 'axios';

export async function sendWhatsapp(phone: string, message: string) {
  // EXAMPLE PHONE = 59177640687
  try {
    const url = 'https://labs.patio.com.bo/whatsapp/send_message.php';
    const instance = axios.create({
      timeout: 1000,
    });
    await instance.post(url, {
      phone: phone,
      message: message,
    });
    // console.log(data);
    // return data;
  } catch (error) {
    // return null;
  }
}

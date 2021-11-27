import { postFeedbackMail } from "./services/FeedbackMail";

async function makeAndHandleFeedbackPost(
  mailFrom : string,
  mailTo : string,
  subject: string,
  email: string,  
  text: string,
  key: string,
  file?: File,
  
): Promise<any> {
  let res;
  try {
    const formData = new FormData();
    formData.append('from', mailFrom);
    formData.append('to', mailTo);
    formData.append('subject', subject);
    formData.append('text', text);
    if(email !== '')
      formData.append('h:Reply-To', email);
    if(file !== undefined)
        formData.append('"attachment"; filename="image.JPG"', file);
    res = await postFeedbackMail({formData, key})
    
  } catch (err) {
    console.error(err);
  }
  return res;
}


export {makeAndHandleFeedbackPost}
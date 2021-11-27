import axios, { AxiosResponse } from "axios";

export const postFeedbackMail = async (queryParams: {
    key: string;
    formData: FormData;
  }):  Promise<AxiosResponse> => { 

    return await axios.post(`https://api.mailgun.net/v3/mg.crowdalerts.com/message`, 
    queryParams.formData
    ,{
      auth:{
        username:'api',
        password:queryParams.key
      },
      
    });
    
    
  };

import axios from "axios";

const PROXY = "https://6322fc6aa624bced30839d40.mockapi.io/"

export async function getData(url: string) {
    try {
      const res = await axios.get(`${PROXY}/${url}`);
      return res;
    } catch (error) {
      console.log("error", error);
    }
  }
  
  export async function postData(url: string, props: object) {
    const res = await axios.post(`${PROXY}/${url}`, {
      ...props,
    });
    return res;
  }
  
  export async function putData(url: string, props: object) {
    try {
      const res = await axios.put(`${PROXY}/${url}`, {
        ...props
      });
      return res;
    } catch (err) {
      console.log("error", err);
    }
  }
  
  export async function deleteData(url: string) {
    await axios.delete(`${PROXY}/${url}`);
  }
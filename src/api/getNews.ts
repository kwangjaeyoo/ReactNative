import axios from 'axios'

export const getNewsApi = async (apiName: string) => {
  try {
    let site = 'https://newsapi.org/v2/' + apiName
    let params = {
      apiKey: 'e910fc46ebf94f6787fea10f440b99ef',
      country: 'us',
    }

    const request = await axios({
      method: 'get',
      url: site,

      headers: {
        'Contnet-Type': 'application/json',
      },
      params: params,
      timeout: 10000,
    })

    return request
  } catch (error) {
    console.log('error ' + JSON.stringify(error))
  }
}

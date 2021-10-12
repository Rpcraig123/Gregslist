import Client from './'

export const GetProducts = async () => {
  try {
    const res = await Client.get('/')
    return res.data
  } catch (error) {
    throw error
  }
}
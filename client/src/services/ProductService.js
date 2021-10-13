import Client from './'

export const GetProducts = async () => {
  try {
    const res = await Client.get('/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostProducts = async (newProduct) => {
  try {
    const res = await Client.post('/new-product', newProduct)
    return res
  } catch (error) {
    throw error
  }
}
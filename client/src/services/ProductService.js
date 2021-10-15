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

export const DeleteProduct = async (id) => {
  try {
    const res = await Client.delete(`/remove-product/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const UpdateProduct = async (product, id) => {
  try {
    const res = await Client.put(`/update-product/${id}`, product)
    return res
  } catch (error) {
    throw error
  }
}

export const getComments = async (productId) => {
  try {
    const res = await Client.get(`/comments/${productId}`)
    return res.data.comments.comments
  } catch (error) {
    throw error
  }
}

export const postComment = async (desc, id) => {
  try {
    const res = await Client.post(`/new-comment/${id}`, desc)
    return res
  } catch (error) {
    throw error
  }
}
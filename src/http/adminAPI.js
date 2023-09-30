import { $authHost, $host } from "./index"


export const createArticle = async (obj) => {
	const { data } = await $authHost.post('api/admin', obj)
	return data
}
export const getAll = async () => {
	const { data } = await $host.get('api/admin/articles')
	return data
}

export const deleteOne = async (id) => {
	const { data } = await $authHost.delete('api/admin/delete/' + id)
	return data
}

export const getOne = async (id) => {
	const { data } = await $host.get('api/admin/' + id)
	return data
}

export const editOneArticle = async (obj) => {
	const { data } = await $authHost.put('api/admin', obj)
	return data
}
export const changeOrderArticles = async (obj) => {
	const { data } = await $authHost.put('api/admin/change/order', obj)
	return data
}
import axios from "axios";

//TODO create HOC
export class User {
	static get = async (callback) => {
		try {
			const response = await axios.get(`api/users`);
			callback.call(this, response);
		} catch (e) {
			console.error(e);
		}
	}
	static create = async (task) => {
		try {
			await axios.post(`api/user`, {...task});
		} catch (e) {
			console.error(e);
		}
	}
	static update = async (task) => {
		try {
			await axios.put(`api/user`, task);
		} catch (e) {
			console.error(e);
		}
	}
	static delete = async (id) => {
		try {
			await axios.delete(`api/user`, {params: {id}});
		} catch (e) {
			console.error(e);
		}
	}
}

import { useEffect, useState } from "react";

export const useAwait = <T extends any>(promise: () => Promise<T>) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		setLoading(true);
		promise()
			.then((res) => {
				setData(res);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return { data, loading, error };
} 
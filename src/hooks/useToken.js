import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {

        const email = user?.user?.email;
        // const name = user?.user?.displayName;
        // console.log(name)


        const currentUser = { email: email };
        // console.log(currentUser)
        if (email) {
            fetch(`https://peaceful-waters-42797.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data?.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user]);
    return [token];
}
export default useToken;
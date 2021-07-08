function useToken() {

    const storage = localStorage.getItem('token');

    return storage != null ? storage : null;

}

export default useToken;
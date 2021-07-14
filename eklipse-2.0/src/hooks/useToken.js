function useToken() {

    const storage = localStorage.getItem('id');

    return storage != null ? storage : null;

}

export default useToken;
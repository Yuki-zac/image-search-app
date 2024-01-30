const Form = ({setKeyword, searchPhoto}) => {
    return (
        <form className="search-form">
            <input
                type="text"
                name="keyword"
                placeholder="画像を検索"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" onClick={searchPhoto}>検索</button>
        </form>
    );
}

export default Form;
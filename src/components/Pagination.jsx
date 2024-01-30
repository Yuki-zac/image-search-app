const Pagination = ({pageIncrement, pageDecrement, pageCount, totalPage}) => {
    
    return (
        <div className="pagination">
            <p>{pageCount} / {totalPage}</p>
            { pageCount > 1 && <button onClick={pageDecrement}>前へ</button> }
            { pageCount < totalPage && <button onClick={pageIncrement}>次へ</button> }
        </div>
    );
}

export default Pagination;
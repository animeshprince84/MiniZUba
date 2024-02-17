const Grid = (props) =>{
    const {listData} = props
    console.log(listData);
    return(
        <div className="grid">
            <table>
                <thead>
                    <tr>
                        <th>Order Line ID</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Description</th>
                        <th>Order ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listData.map((item)=>(
                            <tr>
                                <td>{item.OrderLineID}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.UnitPrice}</td>
                                <td>{item.Description}</td>
                                <td>{item.OrderID}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Grid;
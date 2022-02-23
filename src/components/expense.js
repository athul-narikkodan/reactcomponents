import "./expenseItem.css";
function Expense(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">{props.date.toISOString()}</div>
      <div>
        <div className="expense-item__description h2">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
    </div>
  );
}
export default Expense;

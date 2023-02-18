const MealItemForm = (props) => {
  return (
    <form>
      <label htmlFor="amount">Amount</label> &nbsp;
      <input
        id="amount"
        type="number"
        defaultValue="1"
        style={{ width: "20%", borderRadius: "5px" }}
        min="1"
      />
      <br />
      <button
        type="submit"
        style={{
          background: "brown",
          borderRadius: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
          color:'white',
          border:'none'
        }}
      >
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;

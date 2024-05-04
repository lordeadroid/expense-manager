const InputTransaction = () => {
  const handleForm = () => {};

  return (
    <form action={handleForm}>
      <label htmlFor="product">Product</label>
      <input type="text" name="product" />
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" />
      <label htmlFor="date">Purchased On</label>
      <input type="text" name="date" />
    </form>
  );
};

export default InputTransaction;

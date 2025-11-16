const CartFooter = ({ Cart }) => {
  return (
    <tfoot>
      <tr className="border-t text-lg md:text-xl">
        <th
          colSpan={2}
          className="text-center px-[5%] sm:px-[20%]  md:px-[25%]"
        >
          Total Price
        </th>
        <th
          colSpan={2}
          className="text-center px-[7%] text-sm sm:text-lg border-l"
        >
          ₨{" "}
          <span className="text-lg sm:text-2xl md:text-3xl">
            {Cart.totalPrice}
          </span>
        </th>
      </tr>
    </tfoot>
  );
};

export default CartFooter;

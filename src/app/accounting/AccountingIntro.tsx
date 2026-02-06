import GridLayout from "../../components/layout/GridLayout";
import OverallBalance from "./OverallBalance";
import MyForm from "./MyForm";

export default function AccountingIntro() {
  return (
    <>
      <GridLayout cols={2}>
        <MyForm />
        <OverallBalance />
      </GridLayout>
    </>
  );
}

import TextData from "../textData/TextData";

interface RowProps {
    name: string;
    value: string;
    name2?: string;
    value2?: string;
}
export const Row = (props: RowProps) => {
  return (
    <tr>
      <td>
        <TextData name={props.name} value={props.value} />
      </td>
      <td>
        <TextData name={props.name2 ?? ''} value={props.value2 ?? ''} />
      </td>
    </tr>
  );
};
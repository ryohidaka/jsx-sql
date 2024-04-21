type Props = {
  name: string;
  value: string;
};

export const Column = ({ name, value }: Props): JSX.Element => {
  console.log(name, value);
  return <></>;
};

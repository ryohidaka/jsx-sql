import { WhereProps } from "@/types";

/**
 * Checks if the given node is of the specified type.
 * @param node - The JSX element to check.
 * @param type - The type to compare with the node's type.
 * @returns True if the node's type matches the given type, false otherwise.
 */
export const checkNodeType = (node: JSX.Element, type: string): boolean => {
  return node.type.name === type;
};

/**
 * Extracts the 'Where' properties from the given node.
 * @param node - The JSX element to extract the properties from.
 * @returns An object containing the 'Where' properties.
 */
export const getWhereProps = (node: JSX.Element): WhereProps => {
  const whereChild = node.props.children.find((child: any) =>
    checkNodeType(child, "Where"),
  );
  return whereChild
    ? whereChild.props.children.map((child: any) => child.props)
    : {};
};

/**
 * Extracts the 'Limit' amount from the given node.
 * @param node - The JSX element to extract the amount from.
 * @returns The 'Limit' amount, or undefined if no 'Limit' child is found.
 */
export const getLimitAmount = (node: JSX.Element) => {
  const limitChild = node.props.children.find((child: any) =>
    checkNodeType(child, "Limit"),
  );
  return limitChild ? limitChild.props.amount : undefined;
};

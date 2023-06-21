import React, { ReactNode } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import "./index.css";

export function ListItem({
  name,
  children,
  withDivider = true,
}: {
  children: ReactNode;
  name: string;
  withDivider?: boolean;
}) {
  return (
    <>
      <Flex className="advisoryListItemContainer">
        <Flex gap={8}>
          {children}
          <Box className="listItemText">{name}</Box>
        </Flex>
        <Box className="listItemArrowIcon" />
      </Flex>
      {withDivider && (
        <Box mt={8}>
          <Divider />
        </Box>
      )}
    </>
  );
}

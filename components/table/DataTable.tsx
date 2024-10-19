import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const TableExample = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header >
        <DataTable.Title textStyle={[styles.head, styles.headTypo]}>Metric</DataTable.Title>
        <DataTable.Title textStyle={[styles.head, styles.headTypo]}>Value </DataTable.Title>
        <DataTable.Title textStyle={[styles.head, styles.headTypo]}>Time</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>STP (bar)</DataTable.Cell>
        <DataTable.Cell>Cell</DataTable.Cell>
        <DataTable.Cell>{"01/04/24 \n 10:56:32"}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Volume to reach STP</DataTable.Cell>
        <DataTable.Cell>Cell</DataTable.Cell>
        <DataTable.Cell>{"01/04/24 \n 10:56:32"}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell>1 hour decay pressure</DataTable.Cell>
        <DataTable.Cell>Cell</DataTable.Cell>
        <DataTable.Cell>{"01/04/24 \n 10:56:32"}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell>Value of vented water</DataTable.Cell>
        <DataTable.Cell>Cell</DataTable.Cell>
        <DataTable.Cell>{"01/04/24 \n 10:56:32"}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TableExample;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  head: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: 14,
  },
  headTypo: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.87)",
  },
});

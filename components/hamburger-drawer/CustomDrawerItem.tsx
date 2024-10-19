import React from 'react';
import { View, Text, TouchableOpacity, Icon, StyleSheet } from 'react-native';

interface EIcon {
    name: string,
    size: string,
    color: string
}

type DrawerItemProps = {
    label: string,
    icon: EIcon,
    onPress: () => {}
};

function CustomDrawerItem  ({ label, icon, onPress }: DrawerItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      {icon && <Icon name={icon.name} size={icon.size} color={icon.color} />}
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomDrawerItem;
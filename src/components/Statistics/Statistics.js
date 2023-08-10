import { ListItem, List, Text } from "./Statistics.styled";

export const Statistics = ({ stats }) => {
 
  return (
    <section>
      <List>
        {stats.map(item => (
          
          <ListItem key={item.id}>
            <Text>{item.label}</Text>
            <Text>{item.percentage}%</Text>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

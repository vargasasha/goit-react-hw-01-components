import { ListItem, List, Text } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
 
  return (
    <section>

      {title && <h2>{title}</h2>}

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

export const Statistics = ({ stats }) => {
  console.log(stats);
  return (
    <section>
      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

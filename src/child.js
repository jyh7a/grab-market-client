function ChildComponent(props) {
  const { name, age } = props;
  return (
    <>
      <p>나는자식</p>
      <p>
        이름은 {name} 나이는{age} 입니다.
      </p>
    </>
  );
}

export default ChildComponent;

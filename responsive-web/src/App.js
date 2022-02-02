import "./App.css";
import styled from "styled-components";

const text = `ales. Nam accumsan gravida posuere. Morbi ultrices justo sed euismod
          laoreet. Phasellus molestie quam sed augue tempus, sed bibendum purus
          semper. Nunc id placerat odio, et venenatis justo. Donec vestibulum
          rhoncus nisi eget sodales. Sed non sem tortor. Maecenas sed odio
          cursus, cursus odio a, pharetra mauris. Pellentesque nisi dui,
          volutpat ut lectus id, tempor hendrerit eros. In sit amet condimentum
          ex. Sed quis nulla eu felis dictum gravida ac vitae ipsum. Mauris
          scelerisque tincidunt condimentum. Etiam rutrum vitae nunc id aliquam.
          Suspendisse scelerisque sem id ante sodales tempor. Pellentesque id
          ipsum auctor orci rutrum fringilla at non sem. Vivamus non nunc
          pharetra, aliquam sem ut, convallis nisi. Nulla hendrerit nunc a
          cursus lobortis. Nam accumsan varius pellentesque. In eros justo,
          fermentum et velit eget, viverra varius odio.
          ales. Nam accumsan gravida posuere. Morbi ultrices justo sed euismod
          laoreet. Phasellus molestie quam sed augue tempus, sed bibendum purus
          semper. Nunc id placerat odio, et venenatis justo. Donec vestibulum
          rhoncus nisi eget sodales. Sed non sem tortor. Maecenas sed odio
          cursus, cursus odio a, pharetra mauris. Pellentesque nisi dui,
          volutpat ut lectus id, tempor hendrerit eros. In sit amet condimentum
          ex. Sed quis nulla eu felis dictum gravida ac vitae ipsum. Mauris
          scelerisque tincidunt condimentum. Etiam rutrum vitae nunc id aliquam.
          Suspendisse scelerisque sem id ante sodales tempor. Pellentesque id
          ipsum auctor orci rutrum fringilla at non sem. Vivamus non nunc
          pharetra, aliquam sem ut, convallis nisi. Nulla hendrerit nunc a
          cursus lobortis. Nam accumsan varius pellentesque. In eros justo,
          fermentum et velit eget, viverra varius odio.`;

// div 전체가 아래로 내려가는 형식(크기 변동 없음)

const Grid = styled.div`
  float: left;
  background: skyblue;
  //width: 800px; // 위치 이동& 크기 이동 없음 그냥 안보이는 부분은 잘림. -> overflow로 해결
  //width: 40%; // 위치 이동은 없으나, 크기가 아래로 쭉 늘어남.
  width: 20rem; // 블럭 전체가 아래로 이동됨
`;

const Grid2 = styled(Grid)`
  background: yellow;
`;

// ====================================================
// 네이버처럼 스크롤 생기는 형식

// body 역할.
const Body = styled.div`
  background: skyblue;
  overflow: auto; // 크기를 줄이면 스크롤 생김.(텍스트나 박스 크기는 그대로 유지)
  text-align: center; // 수평 가운데 정렬
  width: 100vw;
  height: 100vh;
`;

// box 2개를 감싸는 Wrapper를 하나 더 만듦.
const ScrollWrapper = styled.div`
  border: solid red;
  width: 900px;
  display: inline-block; // Body-ScrollWrapper 수평 가운데 정렬
  margin-bottom: 10vh; // optional
`;

const ScrollBox = styled.div`
  background: yellow;
  width: 400px;
  display: inline-block; // ScrollWrapper-ScrollBox 수평 가운데 정렬
`;

const ScrollBox2 = styled(ScrollBox)`
  background: green;
`;

// ====================================================
// 크기가 변동적.

const DynamicBody = styled.div`
  background: purple;
  width: 100vw;
  height: 100vh;
`;

const DynamicWrapper = styled.div`
  border: solid red;
  width: 900px;
`;

const DynamicBox = styled.div`
  background: black;
  color: white;
  // width: 50%;
  width: 80vw;
`;

const DynamicBox2 = styled(DynamicBox)`
  background: blue;
`;

function App() {
  return (
    <>
      <Grid>{text}</Grid>
      <Grid2>{text}</Grid2>
      <Body>
        <ScrollWrapper>
          <ScrollBox>{text}</ScrollBox>
          <ScrollBox2>{text}</ScrollBox2>
        </ScrollWrapper>
      </Body>
      <DynamicBody>
        <DynamicWrapper>
          <DynamicBox>{text}</DynamicBox>
          <DynamicBox2>{text}</DynamicBox2>
        </DynamicWrapper>
      </DynamicBody>
    </>
  );
}

export default App;

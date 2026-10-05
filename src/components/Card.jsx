// Component function parameter called props
// Props rules: *** do not change props
// export default function Card({ title, bg: backgroundColor = 'gray' }) {
//   title = 'A';
//   return (
//     <div
//       style={{
//         borderWidth: '2px',
//         borderColor: 'red',
//         borderStyle: 'solid',
//         borderRadius: '8px'
//       }}
//     >
//       {/* image */}
//       <div style={{ width: '3rem', height: '3rem', backgroundColor }}></div>
//       {/* title */}
//       <p>{title}</p>
//     </div>
//   );
// }

import Footer from './Footer';

export default function Card(props) {
  // props.title = 'Hello';
  const { bg } = props;
  return (
    <div
      style={{
        borderWidth: '2px',
        borderColor: 'red',
        borderStyle: 'solid',
        borderRadius: '8px'
      }}
    >
      {/* image */}
      <div style={{ width: '3rem', height: '3rem', backgroundColor: bg }}></div>
      {/* title */}
      {/* <Footer title={props.title} bg={props.bg} /> */}
      <Footer {...props} />
    </div>
  );
}

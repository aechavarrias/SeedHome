import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Nav, Barsbutton, NavMenu, NavLink } from "./NavbarElements";
import logo_sin_letras from "../../../../static/images/Logos/logo_sin_letras.png";

const Footer = () => {
  return (
    <Box>
            <Container>
            <Row>
                <Column>
                  <img src={logo_sin_letras} alt="logo" width="100px" height="100px" />
                </Column>
                <Column>
                  <Heading>About Us</Heading>
                  <FooterLink href="/signup">Aim</FooterLink>
                  <FooterLink href="#">History</FooterLink>
                  <FooterLink href="#">Services</FooterLink>
                  <FooterLink href="#">Locations</FooterLink>
                </Column>
                <Column>
                  <Heading>Contact Us</Heading>
                  <FooterLink href="#">Contact</FooterLink>
                  <FooterLink href="/about">Support</FooterLink>
                  <FooterLink href="#">Destinations</FooterLink>
                  <FooterLink href="#">Sponsorships</FooterLink>
                </Column>
                <Column>
                  <Heading>Videos</Heading>
                  <FooterLink href="#">Submit Video</FooterLink>
                  <FooterLink href="#">Ambassadors</FooterLink>
                  <FooterLink href="#">Agency</FooterLink>
                  <FooterLink href="#">Influencer</FooterLink>
                </Column>
                <Column>
                  <Heading>Social Media</Heading>
                  <FooterLink href="#">Instagram</FooterLink>
                  <FooterLink href="#">Facebook</FooterLink>
                  <FooterLink href="#">Youtube</FooterLink>
                  <FooterLink href="#">Twitter</FooterLink>
                </Column>
            </Row>
            </Container>
        </Box>
    );
    };
    export default Footer;
//         }}
//     >
//       <h1 style={{ color: "green", 
//                    textAlign: "center", 
//                    marginTop: "-50px" }}>
//         GeeksforGeeks: A Computer Science Portal for Geeks
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>About Us</Heading>
//             <FooterLink href="#">Aim</FooterLink>
//             <FooterLink href="#">Vision</FooterLink>
//             <FooterLink href="#">Testimonials</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Writing</FooterLink>
//             <FooterLink href="#">Internships</FooterLink>
//             <FooterLink href="#">Coding</FooterLink>
//             <FooterLink href="#">Teaching</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;
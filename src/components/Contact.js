import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';

const Contact = () => {
    return(
        <>
            <div id="contactContainer">
                <div className="banner">
                    <h2>Contact Info</h2>
                </div>
                <div className="iconContainer">
                    <Link href="mailto:iamcrjones@gmail.com?subject=SendMail&body=Description" target="_blank"><MailIcon sx={{ fontSize: 80 }}/></Link>
                    <Link href="https://www.linkedin.com/in/iamcrjones/" rel="noreferrer" target="_blank"><LinkedInIcon sx={{ fontSize: 80 }}/></Link>
                    <Link href="https://github.com/iamcrjones" rel="noreferrer" target="_blank"><GitHubIcon sx={{ fontSize: 80 }}/></Link>
                </div>
            </div>
        </>
    )
}
export default Contact;
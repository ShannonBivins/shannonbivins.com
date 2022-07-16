import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => (
    <div id="social-wrap">
        <div id="social">
            <a className='fa-brands' href='https://www.youtube.com/channel/UCu_BV0rR_a8ZsoVC9Q4zB9g' target={ '_blank' } rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
            <a className='fa-brands' href='https://www.linkedin.com/in/shannon-bivins/' target={ '_blank' } rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a className='fa-brands' href='https://github.com/ShannonBivins' target={ '_blank' } rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className='fa-brands' href='https://www.instagram.com/shannonbivins/' target={ '_blank' } rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a className='fa-brands' href='https://twitter.com/shannonbivins' target={ '_blank' } rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
        </div>
    </div>
)

export default Social
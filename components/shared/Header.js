import React from 'react'
import Link from 'next/link'
import '../../styles/main.scss'
import {Link as NextLink} from '../../routes'

class Header extends React.Component {
    render() {
        const title = this.props.title;
        const child = this.props.children;
        return (
            <React.Fragment>
                <p>{ title }</p>
                <p>{ child }</p>
                <p className='customClass'>This is the elemet for styling.</p>
                <p className='customClassFromFile'>This is the elemet for styling from file.</p>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/portfolios'>
                    <a>Portfolio</a>
                </Link>
                <Link href='/blogs'>
                    <a>Blog</a>
                </Link>
                <Link href='/cv'>
                    <a>CV</a>
                </Link>
                <NextLink route='test' params={{id: 2}}>Test2</NextLink>
                <NextLink route='/test/5'>Test5</NextLink>
                <style jsx>{`
                    a {
                        font-size: 20px;
                    }
                    .customClass {
                        color: red
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Header;
export default function Header({handlePageChange}){
    return (
        <header>
            <nav>
                <a href='#about' onClick={() => handlePageChange('About')}>About</a>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                <a href='#contact' onClick={() => handlePageChange('Contact')}>Contact</a>
            </nav>
        </header>
    )
}
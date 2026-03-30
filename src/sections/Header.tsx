import { useState } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { MenuIcon, XIcon } from '../components/Icons'
import { navItems, person } from '../data/portfolio'
import { scrollToSection } from '../lib/utils'

interface HeaderProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  activeSection: string
}

export function Header({ theme, onToggleTheme, activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(href: string) {
    setMenuOpen(false)
    const id = href.replace('#', '')
    scrollToSection(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-gray-800/60 dark:bg-gray-950/80">
      <div className="section-container flex h-16 items-center justify-between">
        {/* Logo / name */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label="Ir ao topo da página"
        >
          {person.name.split(' ')[0]}{' '}
          <span className="text-accent">{person.name.split(' ').slice(1).join(' ')}</span>
        </button>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
          {navItems.map(item => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={`
                  rounded-md px-3 py-1.5 text-sm font-medium transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                  ${
                    isActive
                      ? 'text-accent'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }
                `}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(prev => !prev)}
            className="
              rounded-lg p-2 text-gray-500 dark:text-gray-400
              hover:bg-gray-100 dark:hover:bg-gray-800
              hover:text-gray-900 dark:hover:text-gray-100
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
              transition-colors lg:hidden
            "
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu de navegação mobile"
          className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 lg:hidden"
        >
          <div className="section-container flex flex-col py-3 gap-1">
            {navItems.map(item => {
              const id = item.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    rounded-md px-3 py-2 text-sm font-medium text-left transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                    ${
                      isActive
                        ? 'text-accent bg-accent/5'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                  `}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

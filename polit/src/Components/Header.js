import React from 'react'

export default function Header() {
  return (
    <header class="main-header">
			<div class="logo">
				<a href="index.html"><img src="" alt="logo"></img></a>
			</div>

			<div class="menu">
				<nav class="desktop-nav">
					<ul class="first-level">
						<li><a href="index.html" class="animsition-link">Біз туралы</a></li>
						<li><a href="/">Колледж</a>
							<ul class="second-level">
								<li><a href="college-story.html" class="animsition-link">Колледж тарихы</a></li>
								<li><a href="structure.html" class="animsition-link">Құрылымы</a></li>
								<li><a href="management.html" class="animsition-link">Басшылық</a></li>
							</ul>
						</li>
						<li><a href="">Талапкерге</a>
							<ul class="second-level">
								<li><a href="roles.html" class="animsition-link">Қабылдау ережесі</a></li>
								<li><a href="professional.html" class="animsition-link">Мамандықтар</a></li>
							</ul>
						</li>
						<li><a href="">Струденттерге</a>
							<ul class="second-level">
								<li><a href="Worldskills.html" class="animsition-link">Worldskils</a></li>
								<li><a href="Electronic-library.html" class="animsition-link">"Электорнды кітапхана"</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
	</header>

  )
}

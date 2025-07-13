const sidebars = {
  portfolioSidebar: [
    '000-1_ポートフォリオ概要',

    {
      type: 'category',
      label: 'Java',
      customProps: {
        iconPath: '/portfolio-docs/img/icons/java.svg',
      },
      items: [
        {
          type: 'category',
          label: '• Vanila Java',
          items: [
            'Java/Vanila/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Spring',
          items: [
            'Java/Spring/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• JavaFX',
          items: [
            'Java/JavaFX/001-INDEX',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Kotlin',
      customProps: {
        iconPath: '/portfolio-docs/img/icons/kotlin.svg',
      },
      items: [
        {
          type: 'category',
          label: '• Spring',
          items: [
            'Kotlin/Spring/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Ktor',
          items: [
            'Kotlin/Ktor/001-INDEX',
          ],
        },
      ],
    },

   {
      type: 'category',
      label: 'Python',
      customProps: {
        iconPath: '/portfolio-docs/img/icons/python.svg',
      },
      items: [
        {
          type: 'category',
          label: '• Vanila Python',
          items: [
            'Python/Vanila/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Django',
          items: [
            'Python/Django/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Flask',
          items: [
            'Python/Flask/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• FastAPI',
          items: [
            'Python/FastAPI/001-INDEX',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Javascript',
      customProps: {
        iconPath: '/portfolio-docs/img/icons/javascript.svg',
      },
      items: [
        {
          type: 'category',
          label: '• Vanila Javascript',
          items: [
            'Javascript/Vanila/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Expressjs',
          items: [
            'Javascript/Expressjs/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• React',
          items: [
            'Javascript/React/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Nextjs',
          items: [
            'Javascript/Nextjs/001-INDEX',
          ],
        },
        {
          type: 'category',
          label: '• Electron',
          items: [
            'Javascript/Electron/001-INDEX',
          ],
        },
      ],
    },

  ],
};

export default sidebars;

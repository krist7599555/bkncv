export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              // description:
              //   'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d62b5ed6c8636ec864d601f',
                  title: 'Sanity Studio',
                  name: 'bkncv-studio',
                  apiId: 'bfb905c5-7482-401a-8868-fbb9d8f8c55a'
                },
                {
                  buildHookId: '5d62b5ed230a16c3ca0c0d79',
                  title: 'Blog Website',
                  name: 'bkncv',
                  apiId: '92eddab9-7971-4db1-bcb4-d0c99858272d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krist7599555/bkncv',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bkncv.netlify.com', category: 'apps'}
        ]
      }
    },
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
    // {name: 'project-users', layout: {height: 'auto'}}
  ]
}

import type {
  GithubConfig,
  Link,
  PhotoData,
  PhotosConfig,
  PostConfig,
  Project,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

export const SITE: Site = {
  title: 'Ating小站',
  description: 'become better with each passing day',
  website: 'https://blog.wrihope.top/',
  base: '/',
  author: 'Ating',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: '关于我',
    url: '/',
  },
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
  {
    name: '标签',
    url: '/tags',
  },
  {
    name: '生活记录',
    url: '/photos',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/cuichan',
    icon: 'icon-[ri--github-fill]',
    count: 2,
  },
  // {
  //   name: 'twitter',
  //   url: 'https://x.com/yourname',
  //   icon: 'icon-[ri--twitter-x-fill]',
  // },
  // {
  //   name: 'bilibili',
  //   url: 'https://space.bilibili.com/yourSpaceId',
  //   icon: 'icon-[ri--bilibili-fill]',
  // },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        { name: 'Spring Boot', icon: 'icon-[logos--spring-icon]' },
        { name: 'Nginx', icon: 'icon-[logos--nginx]' },
        { name: 'MyBatis', icon: 'icon-[carbon--data-base]' },
        { name: 'RabbitMQ', icon: 'icon-[logos--rabbitmq-icon]' },
        { name: 'Git', icon: 'icon-[mdi--git]' },
        { name: 'MongoDB', icon: 'icon-[lineicons--mongodb]' },
      ],
    },
    {
      direction: 'right',
      skills: [
        { name: 'Java', icon: 'icon-[logos--java]' },
        { name: 'Redis', icon: 'icon-[logos--redis]' },
        { name: 'MySQL', icon: 'icon-[logos--mysql]' },
        { name: 'Maven', icon: 'icon-[logos--maven]' },
        { name: 'Docker', icon: 'icon-[logos--docker-icon]' },
        { name: 'Elasticsearch', icon: 'icon-[logos--elasticsearch]' },
      ],
    },
    {
      direction: 'left',
      skills: [
        { name: 'Linux', icon: 'icon-[logos--linux-tux]' },
        { name: 'Kafka', icon: 'icon-[logos--kafka-icon]' },
        { name: 'Prometheus', icon: 'icon-[logos--prometheus]' },
        { name: 'Grafana', icon: 'icon-[logos--grafana]' },
        { name: 'SpringCloud', icon: 'icon-[logos--spring-icon]' },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'cuichan',
  TOOLTIP_ENABLED: true,
}

export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Ating',
  introduce: '如是我闻 姑妄听之.',
  author: 'Ating',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9',
  postType: 'horizontal',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'The examples of my projects.',
  introduce: 'The examples of my projects.',
}

// get icon https://icon-sets.iconify.design/
// TODO 项目栏
export const ProjectList: Project[] = [
  // {
  //   name: 'Litos',
  //   description: 'A Simple & Modern Blog Theme for Astro.',
  //   githubUrl: 'https://github.com/Dnzzk2/Litos',
  //   website: 'https://litos.vercel.app/',
  //   type: 'image',
  //   icon: '/projects/logo.png',
  //   star: 16,
  //   fork: 5,
  // },
]

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Photos',
  description: 'Here I will record some photos taken in daily life.',
  introduce: 'Here I will record some photos taken in daily life.',
}

export const PhotosList: PhotoData[] = [
  {
    title: "Friend's Adorable Cat",
    icon: {
      type: 'emoji',
      value: '🌠',
    },
    description: 'So kawaii (*^ω^*)',
    date: '2025-06-21',
    travel: '',
    photos: [
      {
        src: '/photos/cat1.webp',
        alt: "Friend's Adorable Cat",
        width: 1080,
        height: 810,
        variant: '4x3',
      },
      {
        src: '/photos/cat2.webp',
        alt: "Friend's Adorable Cat",
        width: 1080,
        height: 810,
        variant: '4x3',
      },
      {
        src: '/photos/cat3.webp',
        alt: "Friend's Adorable Cat",
        width: 1080,
        height: 810,
        variant: '4x3',
      },
      {
        src: '/photos/cat4.webp',
        alt: "Friend's Adorable Cat",
        width: 1080,
        height: 810,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Ningbo · Dongqian Lake',
    icon: {
      type: 'emoji',
      value: '🌅',
    },
    description: 'Cycling around Dongqian Lake. Although I got leg cramps a few times, the scenery was beautiful.',
    date: '2025-03-01',
    travel: '',
    photos: [
      {
        src: '/photos/dqh1.webp',
        alt: 'Ningbo · Dongqian Lake',
        width: 1080,
        height: 1358,
        variant: '4x5',
      },
      {
        src: '/photos/dqh2.jpg',
        alt: 'Ningbo · Dongqian Lake',
        width: 1080,
        height: 1080,
        variant: '1x1',
      },
      {
        src: '/photos/dqh3.jpg',
        alt: 'Ningbo · Dongqian Lake',
        width: 1440,
        height: 1080,
        variant: '4x3',
      },
    ],
  },
  {
    title: 'Ningbo · Zhoushan',
    icon: {
      type: 'emoji',
      value: '🌉',
    },
    description: '',
    date: '2024-09-07',
    travel: '',
    photos: [
      {
        src: '/photos/zs1.webp',
        alt: 'Ningbo · Zhoushan',
        width: 1210,
        height: 908,
        variant: '4x3',
      },
      {
        src: '/photos/zs2.webp',
        alt: 'Ningbo · Zhoushan',
        width: 1080,
        height: 810,
        variant: '4x3',
      },
    ],
  },
]

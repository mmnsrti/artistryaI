<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">ARTISTRYAI</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/mmnsrti/artistryaI?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/mmnsrti/artistryaI?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/mmnsrti/artistryaI?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/mmnsrti/artistryaI?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<br>
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/i18next-26A69A.svg?style=flat&logo=i18next&logoColor=white" alt="i18next">
	<img src="https://img.shields.io/badge/Stripe-008CDD.svg?style=flat&logo=Stripe&logoColor=white" alt="Stripe">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running artistryaI](#-running-artistryaI)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

HTTP error 401 for prompt `overview`

---

##  Features

HTTP error 401 for prompt `features`

---

##  Repository Structure

```sh
└── artistryaI/
    ├── LICENSE
    ├── README.md
    ├── app
    │   ├── (auth)
    │   │   ├── layout.tsx
    │   │   ├── sign-in
    │   │   │   └── [[...signin-in]]
    │   │   │       └── page.tsx
    │   │   └── sign-up
    │   │       └── [[...signup-up]]
    │   │           └── page.tsx
    │   ├── (root)
    │   │   ├── credits
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── loading.tsx
    │   │   ├── page.tsx
    │   │   ├── profile
    │   │   │   └── page.tsx
    │   │   └── transformation
    │   │       ├── [id]
    │   │       │   ├── loading.tsx
    │   │       │   ├── page.tsx
    │   │       │   └── update
    │   │       ├── add
    │   │       │   └── [type]
    │   │       └── loading.tsx
    │   ├── api
    │   │   └── webhooks
    │   │       ├── clerk
    │   │       │   └── route.ts
    │   │       └── stripe
    │   │           └── route.ts
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── not-found.tsx
    ├── components
    │   ├── loading
    │   │   └── LoadingComponent.tsx
    │   ├── shared
    │   │   ├── Checkout.tsx
    │   │   ├── Collection.tsx
    │   │   ├── CustomField.tsx
    │   │   ├── DeleteConfirmation.tsx
    │   │   ├── Header.tsx
    │   │   ├── InsufficientCreditsModal.tsx
    │   │   ├── MediaUploader.tsx
    │   │   ├── MobileNav.tsx
    │   │   ├── Search.tsx
    │   │   ├── SideBar.tsx
    │   │   ├── TransformationForm.tsx
    │   │   └── TransformedImage.tsx
    │   └── ui
    │       ├── alert-dialog.tsx
    │       ├── button.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── pagination.tsx
    │       ├── select.tsx
    │       ├── sheet.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       └── use-toast.ts
    ├── components.json
    ├── constants
    │   ├── i18n.ts
    │   └── index.ts
    ├── lib
    │   ├── actions
    │   │   ├── image.actions.ts
    │   │   ├── transaction.action.ts
    │   │   └── user.actions.ts
    │   ├── database
    │   │   ├── models
    │   │   │   ├── image.model.ts
    │   │   │   ├── transaction.modol.ts
    │   │   │   └── user.model.ts
    │   │   └── mongoose.ts
    │   └── utils.ts
    ├── middleware.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── assets
    │   │   ├── icons
    │   │   │   ├── add.svg
    │   │   │   ├── bag.svg
    │   │   │   ├── camera.svg
    │   │   │   ├── caret-down.svg
    │   │   │   ├── check.svg
    │   │   │   ├── close.svg
    │   │   │   ├── coins.svg
    │   │   │   ├── credit-coins.svg
    │   │   │   ├── cross.svg
    │   │   │   ├── download.svg
    │   │   │   ├── filter.svg
    │   │   │   ├── free-plan.svg
    │   │   │   ├── home.svg
    │   │   │   ├── image.svg
    │   │   │   ├── menu.svg
    │   │   │   ├── photo.svg
    │   │   │   ├── profile.svg
    │   │   │   ├── scan.svg
    │   │   │   ├── search.svg
    │   │   │   ├── spinner.svg
    │   │   │   └── stars.svg
    │   │   ├── images
    │   │   │   ├── banner-bg.png
    │   │   │   ├── gradient-bg.svg
    │   │   │   ├── logo-icon.svg
    │   │   │   ├── logo-text.svg
    │   │   │   ├── paper-plane.png
    │   │   │   ├── plane.png
    │   │   │   ├── space-ship.png
    │   │   │   └── stacked-coins.png
    │   │   └── logo.png
    │   ├── logo-icon.png
    │   ├── logo.png
    │   ├── next.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── index.d.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                       | Summary                                        |
| ---                                                                                        | ---                                            |
| [middleware.ts](https://github.com/mmnsrti/artistryaI/blob/master/middleware.ts)           | HTTP error 401 for prompt `middleware.ts`      |
| [tailwind.config.ts](https://github.com/mmnsrti/artistryaI/blob/master/tailwind.config.ts) | HTTP error 401 for prompt `tailwind.config.ts` |
| [components.json](https://github.com/mmnsrti/artistryaI/blob/master/components.json)       | HTTP error 401 for prompt `components.json`    |
| [tsconfig.json](https://github.com/mmnsrti/artistryaI/blob/master/tsconfig.json)           | HTTP error 401 for prompt `tsconfig.json`      |
| [postcss.config.js](https://github.com/mmnsrti/artistryaI/blob/master/postcss.config.js)   | HTTP error 401 for prompt `postcss.config.js`  |
| [package.json](https://github.com/mmnsrti/artistryaI/blob/master/package.json)             | HTTP error 401 for prompt `package.json`       |
| [next.config.mjs](https://github.com/mmnsrti/artistryaI/blob/master/next.config.mjs)       | HTTP error 401 for prompt `next.config.mjs`    |
| [package-lock.json](https://github.com/mmnsrti/artistryaI/blob/master/package-lock.json)   | HTTP error 401 for prompt `package-lock.json`  |

</details>

<details closed><summary>constants</summary>

| File                                                                             | Summary                                        |
| ---                                                                              | ---                                            |
| [i18n.ts](https://github.com/mmnsrti/artistryaI/blob/master/constants/i18n.ts)   | HTTP error 401 for prompt `constants/i18n.ts`  |
| [index.ts](https://github.com/mmnsrti/artistryaI/blob/master/constants/index.ts) | HTTP error 401 for prompt `constants/index.ts` |

</details>

<details closed><summary>types</summary>

| File                                                                             | Summary                                      |
| ---                                                                              | ---                                          |
| [index.d.ts](https://github.com/mmnsrti/artistryaI/blob/master/types/index.d.ts) | HTTP error 401 for prompt `types/index.d.ts` |

</details>

<details closed><summary>components.shared</summary>

| File                                                                                                                             | Summary                                                                    |
| ---                                                                                                                              | ---                                                                        |
| [Search.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/Search.tsx)                                     | HTTP error 401 for prompt `components/shared/Search.tsx`                   |
| [Checkout.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/Checkout.tsx)                                 | HTTP error 401 for prompt `components/shared/Checkout.tsx`                 |
| [Header.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/Header.tsx)                                     | HTTP error 401 for prompt `components/shared/Header.tsx`                   |
| [TransformationForm.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/TransformationForm.tsx)             | HTTP error 401 for prompt `components/shared/TransformationForm.tsx`       |
| [CustomField.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/CustomField.tsx)                           | HTTP error 401 for prompt `components/shared/CustomField.tsx`              |
| [MobileNav.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/MobileNav.tsx)                               | HTTP error 401 for prompt `components/shared/MobileNav.tsx`                |
| [MediaUploader.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/MediaUploader.tsx)                       | HTTP error 401 for prompt `components/shared/MediaUploader.tsx`            |
| [InsufficientCreditsModal.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/InsufficientCreditsModal.tsx) | HTTP error 401 for prompt `components/shared/InsufficientCreditsModal.tsx` |
| [SideBar.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/SideBar.tsx)                                   | HTTP error 401 for prompt `components/shared/SideBar.tsx`                  |
| [TransformedImage.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/TransformedImage.tsx)                 | HTTP error 401 for prompt `components/shared/TransformedImage.tsx`         |
| [Collection.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/Collection.tsx)                             | HTTP error 401 for prompt `components/shared/Collection.tsx`               |
| [DeleteConfirmation.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/shared/DeleteConfirmation.tsx)             | HTTP error 401 for prompt `components/shared/DeleteConfirmation.tsx`       |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                                 | Summary                                                    |
| ---                                                                                                  | ---                                                        |
| [toaster.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/toaster.tsx)           | HTTP error 401 for prompt `components/ui/toaster.tsx`      |
| [use-toast.ts](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/use-toast.ts)         | HTTP error 401 for prompt `components/ui/use-toast.ts`     |
| [label.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/label.tsx)               | HTTP error 401 for prompt `components/ui/label.tsx`        |
| [pagination.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/pagination.tsx)     | HTTP error 401 for prompt `components/ui/pagination.tsx`   |
| [sheet.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/sheet.tsx)               | HTTP error 401 for prompt `components/ui/sheet.tsx`        |
| [toast.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/toast.tsx)               | HTTP error 401 for prompt `components/ui/toast.tsx`        |
| [select.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/select.tsx)             | HTTP error 401 for prompt `components/ui/select.tsx`       |
| [alert-dialog.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/alert-dialog.tsx) | HTTP error 401 for prompt `components/ui/alert-dialog.tsx` |
| [input.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/input.tsx)               | HTTP error 401 for prompt `components/ui/input.tsx`        |
| [button.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/button.tsx)             | HTTP error 401 for prompt `components/ui/button.tsx`       |
| [form.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/ui/form.tsx)                 | HTTP error 401 for prompt `components/ui/form.tsx`         |

</details>

<details closed><summary>components.loading</summary>

| File                                                                                                              | Summary                                                             |
| ---                                                                                                               | ---                                                                 |
| [LoadingComponent.tsx](https://github.com/mmnsrti/artistryaI/blob/master/components/loading/LoadingComponent.tsx) | HTTP error 401 for prompt `components/loading/LoadingComponent.tsx` |

</details>

<details closed><summary>lib</summary>

| File                                                                       | Summary                                  |
| ---                                                                        | ---                                      |
| [utils.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/utils.ts) | HTTP error 401 for prompt `lib/utils.ts` |

</details>

<details closed><summary>lib.database</summary>

| File                                                                                      | Summary                                              |
| ---                                                                                       | ---                                                  |
| [mongoose.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/database/mongoose.ts) | HTTP error 401 for prompt `lib/database/mongoose.ts` |

</details>

<details closed><summary>lib.database.models</summary>

| File                                                                                                               | Summary                                                              |
| ---                                                                                                                | ---                                                                  |
| [user.model.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/database/models/user.model.ts)               | HTTP error 401 for prompt `lib/database/models/user.model.ts`        |
| [transaction.modol.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/database/models/transaction.modol.ts) | HTTP error 401 for prompt `lib/database/models/transaction.modol.ts` |
| [image.model.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/database/models/image.model.ts)             | HTTP error 401 for prompt `lib/database/models/image.model.ts`       |

</details>

<details closed><summary>lib.actions</summary>

| File                                                                                                         | Summary                                                       |
| ---                                                                                                          | ---                                                           |
| [transaction.action.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/actions/transaction.action.ts) | HTTP error 401 for prompt `lib/actions/transaction.action.ts` |
| [image.actions.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/actions/image.actions.ts)           | HTTP error 401 for prompt `lib/actions/image.actions.ts`      |
| [user.actions.ts](https://github.com/mmnsrti/artistryaI/blob/master/lib/actions/user.actions.ts)             | HTTP error 401 for prompt `lib/actions/user.actions.ts`       |

</details>

<details closed><summary>app</summary>

| File                                                                                 | Summary                                       |
| ---                                                                                  | ---                                           |
| [not-found.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/not-found.tsx) | HTTP error 401 for prompt `app/not-found.tsx` |
| [globals.css](https://github.com/mmnsrti/artistryaI/blob/master/app/globals.css)     | HTTP error 401 for prompt `app/globals.css`   |
| [layout.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/layout.tsx)       | HTTP error 401 for prompt `app/layout.tsx`    |

</details>

<details closed><summary>app.api.webhooks.clerk</summary>

| File                                                                                          | Summary                                                     |
| ---                                                                                           | ---                                                         |
| [route.ts](https://github.com/mmnsrti/artistryaI/blob/master/app/api/webhooks/clerk/route.ts) | HTTP error 401 for prompt `app/api/webhooks/clerk/route.ts` |

</details>

<details closed><summary>app.api.webhooks.stripe</summary>

| File                                                                                           | Summary                                                      |
| ---                                                                                            | ---                                                          |
| [route.ts](https://github.com/mmnsrti/artistryaI/blob/master/app/api/webhooks/stripe/route.ts) | HTTP error 401 for prompt `app/api/webhooks/stripe/route.ts` |

</details>

<details closed><summary>app.(auth)</summary>

| File                                                                                  | Summary                                           |
| ---                                                                                   | ---                                               |
| [layout.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(auth)/layout.tsx) | HTTP error 401 for prompt `app/(auth)/layout.tsx` |

</details>

<details closed><summary>app.(auth).sign-in.[[...signin-in]]</summary>

| File                                                                                                       | Summary                                                                  |
| ---                                                                                                        | ---                                                                      |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(auth)/sign-in/[[...signin-in]]/page.tsx) | HTTP error 401 for prompt `app/(auth)/sign-in/[[...signin-in]]/page.tsx` |

</details>

<details closed><summary>app.(auth).sign-up.[[...signup-up]]</summary>

| File                                                                                                       | Summary                                                                  |
| ---                                                                                                        | ---                                                                      |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(auth)/sign-up/[[...signup-up]]/page.tsx) | HTTP error 401 for prompt `app/(auth)/sign-up/[[...signup-up]]/page.tsx` |

</details>

<details closed><summary>app.(root)</summary>

| File                                                                                    | Summary                                            |
| ---                                                                                     | ---                                                |
| [loading.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/loading.tsx) | HTTP error 401 for prompt `app/(root)/loading.tsx` |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/page.tsx)       | HTTP error 401 for prompt `app/(root)/page.tsx`    |
| [layout.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/layout.tsx)   | HTTP error 401 for prompt `app/(root)/layout.tsx`  |

</details>

<details closed><summary>app.(root).profile</summary>

| File                                                                                      | Summary                                                 |
| ---                                                                                       | ---                                                     |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/profile/page.tsx) | HTTP error 401 for prompt `app/(root)/profile/page.tsx` |

</details>

<details closed><summary>app.(root).transformation</summary>

| File                                                                                                   | Summary                                                           |
| ---                                                                                                    | ---                                                               |
| [loading.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/transformation/loading.tsx) | HTTP error 401 for prompt `app/(root)/transformation/loading.tsx` |

</details>

<details closed><summary>app.(root).transformation.[id]</summary>

| File                                                                                                        | Summary                                                                |
| ---                                                                                                         | ---                                                                    |
| [loading.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/transformation/[id]/loading.tsx) | HTTP error 401 for prompt `app/(root)/transformation/[id]/loading.tsx` |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/transformation/[id]/page.tsx)       | HTTP error 401 for prompt `app/(root)/transformation/[id]/page.tsx`    |

</details>

<details closed><summary>app.(root).transformation.[id].update</summary>

| File                                                                                                         | Summary                                                                    |
| ---                                                                                                          | ---                                                                        |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/transformation/[id]/update/page.tsx) | HTTP error 401 for prompt `app/(root)/transformation/[id]/update/page.tsx` |

</details>

<details closed><summary>app.(root).transformation.add.[type]</summary>

| File                                                                                                        | Summary                                                                   |
| ---                                                                                                         | ---                                                                       |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/transformation/add/[type]/page.tsx) | HTTP error 401 for prompt `app/(root)/transformation/add/[type]/page.tsx` |

</details>

<details closed><summary>app.(root).credits</summary>

| File                                                                                      | Summary                                                 |
| ---                                                                                       | ---                                                     |
| [page.tsx](https://github.com/mmnsrti/artistryaI/blob/master/app/(root)/credits/page.tsx) | HTTP error 401 for prompt `app/(root)/credits/page.tsx` |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

###  Installation

1. Clone the artistryaI repository:

```sh
git clone https://github.com/mmnsrti/artistryaI
```

2. Change to the project directory:

```sh
cd artistryaI
```

3. Install the dependencies:

```sh
npm install
```

###  Running artistryaI

Use the following command to run artistryaI:

```sh
npm run build && node dist/main.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/mmnsrti/artistryaI/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/mmnsrti/artistryaI/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/mmnsrti/artistryaI/issues)**: Submit bugs found or log feature requests for Artistryai.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/mmnsrti/artistryaI
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---

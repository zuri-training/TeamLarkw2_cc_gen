# TeamLarkw2: Credit Card Design Library
![CC GEN](https://github.com/zuri-training/TeamLarkw2_cc_gen/blob/main/Frontend/static/images/logo.png)

### Hosting Heroku
[Hosting Link](https://teamlarkw2.herokuapp.com/)

<details>
  <summary>
    <h2>Table of Contents</h2>
</summary>

* [Project Title](#Project-Title)
* [Project Description](#project-description)
* [Project Initialized](#project-init)
* [Resources](#resources)
* [Website Flow](#website-flow)
* [Technologies Being Used](#technologies-being-used)
* [Project Status](#project-status)
* [Collaboration Guide](#collaboration-guide)

</details>

## Project Title
cc_gen


## Project Description
A website that gives potential customers access to choose from a variety of samples of credit card codes designs.

The scope of this project is to create a platform that has a library of credit card designs. This system is based on a relational database with the library and user functions. We hope to provide a comfortable user experience.



## Project Initialized
Zuri Team Inc | I4G x Zuri Project Phase | 23-11-22



## Resources
* **[Documentation](https://drive.google.com/drive/folders/1puYJRBkcoKoBl-G9E6phRmm7L2QVlSIu?usp=share_link)** 

* **[Figma](https://www.figma.com/file/E9zyqSTFxLFSjsjSfctXp8/Team-Larkw2?node-id=0%3A1&t=axqIXMRC9v8pzMe6-1)**

* **[Data Schema](https://github.com/Desmonlixo/cc_gen/blob/main/Milestone_1/Data_Schema/data_schema_TeamLarkw2.jpeg)**



## Walkthrough on installation and testing
### Programming languages: HTML, CSS, JS, Python: Django
```sh
      git clone https://[token]/github.com/suri-training/TeamLarkw2_cc_gen.git
```

then create and setup venv:
```sh
    python -m venv [desired_virtual_name]
```

then open the directory with IDE (vscode), in the terminal run:
```sh
      pip install -r requirements.txt
```
go into the directory "/TeamLarkw2_cc_gen/cc_gen/" with manage.py and run:
```sh
      python manage.py runserver
```
visit
```sh
      https://127.0.0.1:8000
```

admin page create a superuser with this command:
```sh
    django-admin manage.py createsuperuser
```

### Website Flow
#### Unauthenticated Users;

* Visit the platform to view basic information about the platform
* View and interacts with documentation
* Able to view but can't download from the library

#### Authenticated Users;
* Access to all the Unauthenticated user features.
* Users can download credit card code sample
* Users can see usage sample
* Users can comment under a design, react and share on social media
* Downloaded cc design should come with all files (hence, download should be a compressed format)
* Allow user save data and come back to download


## Technologies being used
* Design: <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
* Frontend: <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
	<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
	<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
* Backend: <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
   <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg" width="36" height="36" alt="Django"/></a>
* Version Control System: <a href="https://www.github.com/" target="_blank" rel="noreferrer"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="36" height="36" alt="Github"/></a>

## Project Status
  _in progress ..._


## Flow Chart

The flow chart is a walkthrough of user interactions with the library page.
<p align="center">
  <img src="https://github.com/Desmonlixo/cc_gen/blob/main/Milestone_1/Library_page_flow_chart/Library_page_flowchart_TeamLarkw2.jpeg" alt="flowchart_library_page">
</p>


## Collaboration Guide
For TeamLarkw2 members, follow any of these steps to collaborate:

1. Visit the Repository to the Project on Github Website: "https://github.com/zuri-training/TeamLarkw2_cc_gen.git" <br/>

2. Fork the repository: Click the "Fork" button on the upper right corner of the Repo page.* <br/>

3. Make a local clone: 
     Click on the "Code" button on the Repo page 
     Copy the URL for the forked Repo:
     `https://github.com/zuri-training/TeamLarkw2_cc_gen.git`

     - Create a Folder on your Local machine / Computer for 
    the project Workspace <br/>
     - Open Command prompt / Terminal in the same folder location <br/>
     - In your Terminal, type: <br/>
        `git clone https://github.com/zuri-training/TeamLarkw2_cc_gen.git`

4. Open terminal and set upstream branch: <br/>
    `git remote add upstream https://github.com/zuri-training/TeamLarkw2_cc_gen.git`

5. Pull upstream to get up to date with the original repo:<br/>
    `git pull upstream main`

6. Create a new branch for the task you are working on :<br/>
    `git checkout -b branchName`<br/>

    *(Make sure your branchName is descriptive in context to the feature you are working on. Also be sure to check which branch you are on using `git branch` before you begin working)*

7. When you're done with your task, do:<br/>
    `git add [name of file(s) worked on]`<br/>
   - Commit your work with a message:<br/>
   `git commit -m "message"`
8. To avoid conflicts:<br/>
    `git pull upstream main`
9. Then push your branch:<br/>
    `git push origin branchName` 
    
    - This creates the branch remotely and pushes to that branch on the Github
10. Go to Github and create a new pull request to the main branch. It will then be reviewed and merged into the master.


## Using the Platform

## Contributors

#### Product Design:

- [Eunice Adjeokor Akua Adjei](github.com/UniceAdjei)
- [Ayomide Wilfred Amuda](github.com/fortknux)
- [Nwanya obughikem](https://github.com/ObyUjunwa)
- [Oluwabunmi Ayodele](https://github.com/Deedah-beloved)
- [Efosa Ukpebor](https://github.com/Mazi.efosa) 
- [Osunbayo Ayomide David](https://github.com/OsunbayoA)
- [Olajide Faith](https://github.com/Olushewa)
- [Susan Ugwu](https://github.com/Suziee-designs)
- [Muizdeen Adegbite](https://github.com/king-yosi)
- [Ibitoye Roseline Taiwo](https://github.com/Roselinez)
- [Gideon David Abayomi](https://github.com/davidic2166)
- [Justice Odigie](https://github.com/szyCrypt)

#### Frontend:
- [Ajadi Najimdeen Adeyemi](github.com/StarGaming1)
- [Amina Ibrahim](https://github.com/Amina-ibm)
- [Ajara Amadu](https://github.com/aj-sys)

#### Backend:
- [Chibuike Kelvin Akpulu](https://github.com/Klvxn)


#### FullStack (Frontend / Backend):
- [Desmond Nwadike](https://github.com/Desmonlixo)
- [Christopher Wiafe Debrah](github.com/askdebb)



## Conclusion
This project is a prototype for an online credit card library and it is restricted within the I4G x Zuri Project Phase premises. This has been implemented under the guidance of I4G x Zuri mentors. This project is useful for users as well as the project team.

### Hosting Heroku
[Hosting Link](https://teamlarkw2.herokuapp.com/)

<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * Todo
 *
 * @ORM\Table(name="todo")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TodoRepository")
 * @ApiResource(
 *  attributes ={
 *     "normalization_context"={"groups"={"todos"}},
 *     }
 * )
 */
class Todo
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"todos"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255)
     * @Groups({"todos"})
     */
    private $title;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="startsAt", type="datetime")
     * @Groups({"todos"})
     */
    private $startsAt;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="User", inversedBy="todos")
     */
    private $user;

    /**
     * @var Project [] | ArrayCollection
     * @ORM\ManyToMany(targetEntity="Project")
     * @ORM\JoinTable(name="project_todo",
     *      joinColumns={@ORM\JoinColumn(name="todo_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="project_id", referencedColumnName="id")}
     *      )
     */
    private $projects;

    /**
     * Todo constructor.
     */
    public function __construct()
    {
        $this->projects = new ArrayCollection();
    }


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title.
     *
     * @param string $title
     *
     * @return Todo
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set startsAt.
     *
     * @param \DateTime $startsAt
     *
     * @return Todo
     */
    public function setStartsAt($startsAt)
    {
        $this->startsAt = $startsAt;

        return $this;
    }

    /**
     * Get startsAt.
     *
     * @return \DateTime
     */
    public function getStartsAt()
    {
        return $this->startsAt;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * @return Project[]|ArrayCollection
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * @param Project[]|ArrayCollection $projects
     */
    public function setProjects($projects)
    {
        $this->projects = $projects;
    }

    /**
     * @param Project $project
     * @return $this
     */
    public function addProject(Project $project)
    {
        $this->projects->add($project);
        return $this;
    }

    /**
     * @param Project $project
     * @return bool
     */
    public function removeProject(Project $project)
    {
        return  $this->projects->removeElement($project);
    }



}

<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Project
 *
 * @ORM\Table(name="project")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;


    /**
     * @var Todo [] | ArrayCollection
     * @ORM\ManyToMany(targetEntity="Todo", mappedBy="projects")
     */
    private $todos;

    /**
     * Project constructor.
     */
    public function __construct()
    {
        $this->todos = new ArrayCollection();
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
     * Set name.
     *
     * @param string $name
     *
     * @return Project
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }


    /**
     * @param Todo[]|ArrayCollection $todos
     */
    public function setTodos($todos)
    {
        $this->todos = $todos;
    }

    /**
     * @param Todo $todo
     * @return $this
     */
    public function addTodo(Todo $todo)
    {
        $this->todos->add($todo);
        return $this;
    }

    /**
     * @param Todo $todo
     * @return bool
     */
    public function removeTodo(Todo $todo)
    {
        return  $this->todos->removeElement($todo);
    }

}

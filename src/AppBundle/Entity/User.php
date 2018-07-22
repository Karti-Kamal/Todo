<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 * @ApiResource()
 */
class User extends BaseUser
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="firstName", type="string", length=255)
     */
    private $firstName = '';

    /**
     * @var string
     *
     * @ORM\Column(name="lastName", type="string", length=255)
     */
    private $lastName = '';

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=255)
     */
    private $address = '';

    /**
     * @var Todo [] | ArrayCollection
     * @ORM\OneToMany(targetEntity="Todo", mappedBy="user")
     */
    private $todos;

    /**
     * User constructor.
     */
    public function __construct()
    {
        parent::__construct();
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
     * Set firstName.
     *
     * @param string $firstName
     *
     * @return User
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName.
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName.
     *
     * @param string $lastName
     *
     * @return User
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName.
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set address.
     *
     * @param string $address
     *
     * @return User
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @return Todo[]|ArrayCollection
     */
    public function getTodos()
    {
        return $this->todos;
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

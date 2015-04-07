<?php
/**
 * @Entity @Table(name="party")
 */
class Party
{
    /**
     * @Id @Column(type="integer") @GeneratedValue
     * @var int
     */
    protected $id;

    /**
     * @Column(type="string")
     * @var string
     */
    protected $name;

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @ManyToMany(targetEntity="User")
     * @var users[]
     */
    protected $users = null;

    /**
     * @ManyToMany(targetEntity="Hunt")
     * @var hunts[]
     */
    protected $hunts = null;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->hunts = new ArrayCollection();
    }
}
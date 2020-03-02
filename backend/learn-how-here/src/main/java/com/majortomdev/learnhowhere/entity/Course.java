package com.majortomdev.learnhowhere.entity;
//by JoeK 02/03/20
import com.majortomdev.learnhowhere.CourseProvider;
import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.*;


@Entity
@Table(name="course")
@Data
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id")
  private Long id;

  @Column(name = "provider")
  private String provider;

  @ManyToOne
  @JoinColumn(name = "provider_id", nullable = false)
  private CourseProvider providerOf;

  @Column(name = "name")
  private String name;

  @Column(name = "certification")
  private String certification;

  @Column(name = "cost")
  private Integer cost;

  @Column(name = "description")
  private String description;

  @Column(name = "weeks")
  private Integer weeks;

  @Column(name = "provider_id")
  private Long provider_id;
}
